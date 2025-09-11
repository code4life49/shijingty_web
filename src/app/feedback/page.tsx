"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function FeedbackPage() {
  const { t, setLanguage } = useLanguage();
  const [productFromQuery, setProductFromQuery] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("feedback");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // read lang and product from URL
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const lang = url.searchParams.get("lang");
      const prod = url.searchParams.get("product") || "";
      if (lang === "zh" || lang === "en") {
        // update local state, persist and broadcast
        setLanguage(lang as any);
        try {
          localStorage.setItem("language", lang);
          window.dispatchEvent(new CustomEvent("languageChange", { detail: lang } as CustomEventInit));
        } catch {}
      }
      setProductFromQuery(prod);
      if (!product) setProduct(prod);
    }
  }, [product, setLanguage]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setError(null);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, type, product, message, consent }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || res.statusText);
      }
      setOk(true);
      setName("");
      setEmail("");
      setProduct("");
      setMessage("");
    } catch (err: any) {
      setOk(false);
      setError(err?.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold mb-2">{t("feedbackPage.title")}</h1>
      <p className="text-muted-foreground mb-8">{t("feedbackPage.intro")}</p>

      {productFromQuery ? (
        <div className="mb-6 rounded-lg border border-border bg-muted/20 p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-base">🏷️</span>
            <span>{t("feedbackPage.product")}:</span>
            <span className="font-medium text-foreground">{productFromQuery}</span>
          </div>
        </div>
      ) : null}

      {ok ? (
        <div className="mb-6 rounded-lg border border-green-400/40 bg-green-500/10 p-4">
          <div className="font-semibold mb-1">{t("feedbackPage.successTitle")}</div>
          <div className="text-sm text-muted-foreground">{t("feedbackPage.successDesc")}</div>
        </div>
      ) : null}
      {ok === false ? (
        <div className="mb-6 rounded-lg border border-red-400/40 bg-red-500/10 p-4">
          <div className="font-semibold mb-1">{t("feedbackPage.errorTitle")}</div>
          <div className="text-sm text-muted-foreground">
            {t("feedbackPage.errorDesc")}{" "}
            <a className="underline" href={`mailto:${t("contact.email")}`}>
              {t("contact.email")}
            </a>
            .
          </div>
          {error ? <div className="mt-2 text-xs text-red-400">{String(error)}</div> : null}
        </div>
      ) : null}

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2">{t("feedbackPage.name")}</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-md border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <div>
            <label className="block text-sm mb-2">{t("feedbackPage.email")}</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2">{t("feedbackPage.type")}</label>
          <select value={type} onChange={(e) => setType(e.target.value)} className="w-full rounded-md border border-border bg-background px-3 py-2">
            <option value="feedback">{t("feedbackPage.typeFeedback")}</option>
            <option value="complaint">{t("feedbackPage.typeComplaint")}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-2">{t("feedbackPage.message")}</label>
          <textarea required minLength={5} maxLength={5000} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t("feedbackPage.messagePlaceholder") as string} className="w-full h-40 rounded-md border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30" />
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="h-4 w-4" />
          <span className="text-muted-foreground">{t("feedbackPage.consent")}</span>
        </label>

        <div className="pt-2">
          <button disabled={loading} className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground border border-border px-5 py-2.5 font-medium hover:opacity-90 disabled:opacity-60">
            {loading ? t("feedbackPage.submitting") : t("feedbackPage.submit")}
          </button>
        </div>
      </form>
    </div>
  );
}
