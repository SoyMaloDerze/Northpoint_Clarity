import { useState } from "react";
import {
  Check,
  Copy,
  WandSparkles,
} from "lucide-react";

type DemoCredentialsProps = {
  email: string;
  password: string;
  onAutofill: (
    email: string,
    password: string,
  ) => void;
};

export default function DemoCredentials({
  email,
  password,
  onAutofill,
}: DemoCredentialsProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(
      `Email: ${email}\nPassword: ${password}`,
    );

    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Demo Workspace
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Explore the application instantly.
          </p>
        </div>

        <button
          type="button"
          title="Copy demo credentials"
          onClick={handleCopy}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-600 transition hover:bg-slate-100"
        >
          {copied ? (
            <Check
              size={18}
              className="text-emerald-600"
              aria-hidden="true"
            />
          ) : (
            <Copy
              size={18}
              aria-hidden="true"
            />
          )}
        </button>
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Email
          </p>

          <div className="rounded-xl bg-white px-4 py-3 font-mono text-sm text-slate-700">
            {email}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Password
          </p>

          <div className="rounded-xl bg-white px-4 py-3 font-mono text-sm text-slate-700">
            {password}
          </div>
        </div>
      </div>

      <button
        type="button"
        title="Autofill demo credentials"
        onClick={() => onAutofill(email, password)}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-medium text-white transition hover:bg-emerald-700"
      >
        <WandSparkles
          size={18}
          aria-hidden="true"
        />

        Autofill Credentials
      </button>
    </div>
  );
}