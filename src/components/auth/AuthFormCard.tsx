import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  LockKeyhole,
} from "lucide-react";

import Button from "../ui/Button";
import Card from "../ui/Card";
import Input from "../ui/Input";
import DemoCredentials from "./DemoCredentials";

type AuthFormCardProps = {
  icon: LucideIcon;
  workspace: string;
  title: string;
  description: string;

  demoEmail: string;
  demoPassword: string;

  onSubmit?: () => void;

  buttonText: string;
};

export default function AuthFormCard({
  icon: Icon,
  workspace,
  title,
  description,
  demoEmail,
  onSubmit,
  demoPassword,
  buttonText,
}: AuthFormCardProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleAutofill(
    autofillEmail: string,
    autofillPassword: string,
  ) {
    setEmail(autofillEmail);
    setPassword(autofillPassword);
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    onSubmit?.();
  }

  return (
    <Card className="rounded-4xl border border-white/60 bg-white/90 p-10 shadow-2xl backdrop-blur-xl">
      {/* Header */}

      <div className="flex flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-emerald-50 text-emerald-600">
          <Icon
            size={38}
            aria-hidden="true"
          />
        </div>

        <span className="mt-6 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
          {workspace}
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
          {title}
        </h1>

        <p className="mt-4 max-w-sm text-[15px] leading-7 text-slate-600">
          {description}
        </p>
      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >
        <Input
          id="email"
          label="Email Address"
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
        />

        <Input
          id="password"
          label="Password"
          type="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
        />

        <Button
          title={buttonText}
          type="submit"
          size="lg"
          fullWidth
          leftIcon={
            <LockKeyhole
              size={18}
              aria-hidden="true"
            />
          }
          rightIcon={
            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          }
        >
          {buttonText}
        </Button>
      </form>

      {/* Demo Credentials */}

      <div className="mt-8">
        <DemoCredentials
          email={demoEmail}
          password={demoPassword}
          onAutofill={handleAutofill}
        />
      </div>
    </Card>
  );
}