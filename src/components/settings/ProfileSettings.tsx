import {
  Camera,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";

import Avatar from "../ui/Avatar";
import Button from "../ui/Button";
import Input from "../ui/Input";

import SettingsSection from "./SettingsSection";

export default function ProfileSettings() {
  return (
    <SettingsSection
      title="Profile"
      description="Update your personal information and account details visible across your workspace."
    >
      {/* Profile */}

      <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <Avatar
            name="Administrator"
            size="xl"
          />

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Administrator
            </h3>

            <p className="mt-1 text-slate-500">
              System Administrator
            </p>
          </div>
        </div>

        <Button
          title="Change Photo"
          variant="secondary"
          leftIcon={
            <Camera
              size={18}
              aria-hidden="true"
            />
          }
        >
          Change Photo
        </Button>
      </div>

      {/* Form */}

      <div className="grid gap-6 lg:grid-cols-2">
        <Input
          id="first-name"
          label="First Name"
          defaultValue="Northpoint"
          leftIcon={
            <UserRound
              size={18}
            />
          }
        />

        <Input
          id="last-name"
          label="Last Name"
          defaultValue="Administrator"
          leftIcon={
            <UserRound
              size={18}
            />
          }
        />

        <Input
          id="email"
          type="email"
          label="Email Address"
          defaultValue="admin@northpoint.com"
          leftIcon={
            <Mail
              size={18}
            />
          }
        />

        <Input
          id="phone"
          type="tel"
          label="Phone Number"
          defaultValue="+61 400 000 000"
          leftIcon={
            <Phone
              size={18}
            />
          }
        />
      </div>
    </SettingsSection>
  );
}