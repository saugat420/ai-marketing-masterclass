"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fd?: ((...args: unknown[]) => void) & { q?: unknown[] };
    FlodeskObject?: string;
  }
}

const formId = "6a0056f54d292a1f518a517b";
const rootSelector = ".ff-6a0056f54d292a1f518a517b";

export function RegistrationForm() {
  useEffect(() => {
    const fontLinks = [
      {
        href: "https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap",
      },
      { href: "https://assets.flodesk.com/flodesk-sans.css" },
    ];

    fontLinks.forEach(({ href }) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const preload = document.createElement("link");
        preload.rel = "preload";
        preload.href = href;
        preload.as = "style";
        document.head.appendChild(preload);

        const stylesheet = document.createElement("link");
        stylesheet.rel = "stylesheet";
        stylesheet.href = href;
        document.head.appendChild(stylesheet);
      }
    });

    if (!window.fd) {
      window.FlodeskObject = "fd";
      const fn = (...args: unknown[]) => {
        (window.fd!.q = window.fd!.q || []).push(args);
      };
      window.fd = fn;

      const firstScript = document.getElementsByTagName("script")[0];
      const version = `?v=${Math.floor(new Date().getTime() / (120 * 1000)) * 60}`;

      const moduleScript = document.createElement("script");
      moduleScript.async = true;
      moduleScript.type = "module";
      moduleScript.src = `https://assets.flodesk.com/universal.mjs${version}`;
      firstScript.parentNode?.insertBefore(moduleScript, firstScript);

      const noModuleScript = document.createElement("script");
      noModuleScript.async = true;
      noModuleScript.noModule = true;
      noModuleScript.src = `https://assets.flodesk.com/universal.js${version}`;
      firstScript.parentNode?.insertBefore(noModuleScript, firstScript);
    }

    window.fd("form:handle", {
      formId,
      rootEl: rootSelector,
    });

    const root = document.querySelector(rootSelector);
    if (!root) return;

    let redirectTimer: number | undefined;
    const redirectAfterSuccess = () => {
      if (root.getAttribute("data-ff-stage") === "success" && !redirectTimer) {
        redirectTimer = window.setTimeout(() => {
          window.location.assign("/thanks");
        }, 1800);
      }
    };

    const observer = new MutationObserver(redirectAfterSuccess);
    observer.observe(root, { attributes: true, attributeFilter: ["data-ff-stage", "class"] });
    redirectAfterSuccess();

    return () => {
      observer.disconnect();
      if (redirectTimer) window.clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <section
      id="register"
      className="space-section border-t border-cyan-200/10 px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-y-8 left-0 -z-10 w-24 bg-cyan-500/20 blur-3xl sm:w-40" />
      <div className="pointer-events-none absolute inset-y-8 right-0 -z-10 w-24 bg-violet-600/20 blur-3xl sm:w-40" />
      <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-lg border border-cyan-200/25 bg-[radial-gradient(circle_at_12%_8%,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_88%_0%,rgba(124,58,237,0.2),transparent_34%),linear-gradient(135deg,rgba(14,23,52,0.58),rgba(2,6,23,0.42))] p-4 shadow-[0_24px_90px_rgba(2,8,23,0.72),0_0_40px_rgba(34,211,238,0.08)] backdrop-blur sm:border-cyan-200/20 sm:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:p-10">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200/45 bg-[linear-gradient(100deg,rgba(34,211,238,0.2),rgba(124,58,237,0.2))] px-3.5 py-1.5 text-xs font-extrabold uppercase text-cyan-50 shadow-[0_0_24px_rgba(34,211,238,0.18)]">
              Register now
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Reserve Your Free Seat
            </h2>
            <p className="mt-5 hidden text-base leading-7 text-slate-300 sm:block">
              Fill this short form to join the live AI Marketing Masterclass.
            </p>
          </div>
          <div className="hidden gap-3 text-sm font-semibold text-slate-200 lg:grid">
            {["Free live session", "Zoom details after registration", "Beginner friendly"].map(
              (item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-cyan-200/14 bg-black/20 px-4 py-3"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#0ea5e9,#7c3aed)] text-xs font-extrabold text-white">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-cyan-200/28 bg-[radial-gradient(circle_at_15%_0%,rgba(34,211,238,0.14),transparent_32%),radial-gradient(circle_at_88%_100%,rgba(124,58,237,0.18),transparent_35%),linear-gradient(145deg,rgba(5,12,28,0.96),rgba(2,6,23,0.88))] p-5 shadow-[0_26px_90px_rgba(0,0,0,0.55),0_0_36px_rgba(14,165,233,0.12)] sm:border-cyan-200/22 sm:p-6">
          <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.72),rgba(124,58,237,0.62),transparent)]" />
          <div className="pointer-events-none absolute -left-16 top-8 h-40 w-40 rounded-full bg-cyan-300/18 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-0 h-44 w-44 rounded-full bg-violet-600/24 blur-3xl" />
          <div className="flodesk-dark-wrap">
            <div
              className="ff-6a0056f54d292a1f518a517b"
              data-ff-el="root"
              data-ff-version="3"
              data-ff-type="inline"
              data-ff-name="inlineNoImage"
              data-ff-stage="default"
            >
            <div
              data-ff-el="config"
              data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IllvdSd2ZSBzdWNjZXNzZnVsbHkgc2lnbmVkIHVwISBDaGVjayB5b3VyIGVtYWlsIGZvciBkZXRhaWxzLiIsInJlZGlyZWN0VXJsIjoiL3RoYW5rcyJ9LCJjb2kiOmZhbHNlLCJzaG93Rm9yUmV0dXJuVmlzaXRvcnMiOnRydWUsIm5vdGlmaWNhdGlvbiI6ZmFsc2UsImdkcHIiOnsiYWNjZXB0c01hcmtldGluZyI6ZmFsc2UsInByaXZhY3lQb2xpY3kiOnsiZW5hYmxlZCI6ZmFsc2UsIm1hbmRhdG9yeSI6ZmFsc2V9fSwidHJhY2tpbmdDb25maWciOnsibWV0YVBpeGVsSWQiOiIiLCJjb29raWVCYW5uZXJFbmFibGVkIjpmYWxzZSwiZ29vZ2xlQW5hbHl0aWNzSWQiOiIifX0="
              style={{ display: "none" }}
            />
            <div className="ff-6a0056f54d292a1f518a517b__container">
              <div className="ff-6a0056f54d292a1f518a517b__wrapper">
                <form
                  className="ff-6a0056f54d292a1f518a517b__form"
                  action="https://form.flodesk.com/forms/6a0056f54d292a1f518a517b/submit"
                  method="post"
                  data-ff-el="form"
                >
                  <div className="ff-6a0056f54d292a1f518a517b__title">
                    <div style={{ minHeight: "1em" }}>
                      <div />
                    </div>
                  </div>
                  <div className="ff-6a0056f54d292a1f518a517b__subtitle">
                    <div style={{ minHeight: "1.6em" }}>
                      <div />
                    </div>
                  </div>
                  <div
                    className="ff-6a0056f54d292a1f518a517b__content fd-form-content"
                    data-ff-el="content"
                  >
                    <div className="ff-6a0056f54d292a1f518a517b__fields" data-ff-el="fields">
                      <div className="ff-6a0056f54d292a1f518a517b__field fd-form-group">
                        <input
                          id="ff-6a0056f54d292a1f518a517b-firstName"
                          className="ff-6a0056f54d292a1f518a517b__control fd-form-control"
                          type="text"
                          maxLength={255}
                          name="firstName"
                          placeholder="First name"
                          data-ff-tab="firstName::email"
                          required
                        />
                        <label
                          htmlFor="ff-6a0056f54d292a1f518a517b-firstName"
                          className="ff-6a0056f54d292a1f518a517b__label fd-form-label"
                        >
                          <div>
                            <div>First name</div>
                          </div>
                        </label>
                      </div>

                      <div className="ff-6a0056f54d292a1f518a517b__field fd-form-group">
                        <input
                          id="ff-6a0056f54d292a1f518a517b-email"
                          className="ff-6a0056f54d292a1f518a517b__control fd-form-control"
                          type="text"
                          maxLength={255}
                          name="email"
                          placeholder="Email address"
                          data-ff-tab="email:firstName:fields.whatsapp"
                          required
                        />
                        <label
                          htmlFor="ff-6a0056f54d292a1f518a517b-email"
                          className="ff-6a0056f54d292a1f518a517b__label fd-form-label"
                        >
                          <div>
                            <div>Email address</div>
                          </div>
                        </label>
                      </div>

                      <div className="ff-6a0056f54d292a1f518a517b__field fd-form-group">
                        <input
                          id="ff-6a0056f54d292a1f518a517b-wLiu0YTBVF"
                          className="ff-6a0056f54d292a1f518a517b__control fd-form-control"
                          type="text"
                          maxLength={255}
                          name="fields.whatsapp"
                          placeholder="WhatsApp number"
                          data-ff-tab="fields.whatsapp:email:submit"
                          required
                        />
                        <label
                          htmlFor="ff-6a0056f54d292a1f518a517b-wLiu0YTBVF"
                          className="ff-6a0056f54d292a1f518a517b__label fd-form-label"
                        >
                          <div>
                            <div>WhatsApp number</div>
                          </div>
                        </label>
                      </div>

                      <input
                        type="text"
                        maxLength={255}
                        name="confirm_email_address"
                        style={{ display: "none" }}
                      />
                    </div>

                    <div className="ff-6a0056f54d292a1f518a517b__footer" data-ff-el="footer">
                      <button
                        type="submit"
                        className="ff-6a0056f54d292a1f518a517b__button fd-btn"
                        data-ff-el="submit"
                        data-ff-tab="submit"
                      >
                        <div>
                          <span data-draw-element="editable">Reserve My Free Seat</span>
                        </div>
                      </button>
                      <p className="ff-privacy-note">We respect your privacy. No spam.</p>
                    </div>
                  </div>
                  <div
                    className="ff-6a0056f54d292a1f518a517b__success fd-form-success"
                    data-ff-el="success"
                  >
                    <div className="ff-6a0056f54d292a1f518a517b__success-message">
                      <div>
                        <div>
                          <div data-paragraph="true">
                            You&apos;ve successfully signed up! Check your email for details.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ff-6a0056f54d292a1f518a517b__error fd-form-error"
                    data-ff-el="error"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
