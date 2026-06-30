import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SettingsHeader from "../components/settings/SettingsHeader";
import SettingsSidebar from "../components/settings/SettingsSidebar";
import ProfileSettings from "../components/settings/ProfileSettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import AppearanceSettings from "../components/settings/AppearanceSettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import SystemSettings from "../components/settings/SystemSettings";
import SaveBar from "../components/settings/SaveBar";

import {
  pageVariants,
  smoothTransition,
} from "../lib/motion";

type SettingsSection =
  | "profile"
  | "notifications"
  | "appearance"
  | "security"
  | "system";

export default function SettingsPage() {
  const [activeSection, setActiveSection] =
    useState<SettingsSection>("profile");

  // Temporary until backend integration.
  const [hasChanges, setHasChanges] =
    useState(false);

  function handleSave() {
    console.log("Save Settings");

    setHasChanges(false);
  }

  function handleReset() {
    console.log("Restore Defaults");

    setHasChanges(false);
  }

  return (
    <>
      <motion.section
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={smoothTransition}
        className="space-y-8 pb-32"
      >
        <SettingsHeader
          onReset={handleReset}
        />

        <div className="grid gap-8 xl:grid-cols-[300px_1fr]">
          {/* Sidebar */}

          <div className="xl:sticky xl:top-28 xl:self-start">
            <SettingsSidebar
              active={activeSection}
              onChange={(section) => {
                setActiveSection(
                  section,
                );

                setHasChanges(true);
              }}
            />
          </div>

          {/* Content */}

          <AnimatePresence
            mode="wait"
          >
            <motion.div
              key={activeSection}
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -16,
              }}
              transition={
                smoothTransition
              }
            >
              {activeSection ===
                "profile" && (
                <ProfileSettings />
              )}

              {activeSection ===
                "notifications" && (
                <NotificationSettings />
              )}

              {activeSection ===
                "appearance" && (
                <AppearanceSettings />
              )}

              {activeSection ===
                "security" && (
                <SecuritySettings />
              )}

              {activeSection ===
                "system" && (
                <SystemSettings />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      <SaveBar
        visible={hasChanges}
        onSave={handleSave}
        onReset={handleReset}
      />
    </>
  );
}