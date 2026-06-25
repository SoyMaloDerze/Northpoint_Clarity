import Spinner from "../ui/Spinner";

type LoadingOverlayProps = {
  message?: string;
};

export default function LoadingOverlay({
  message = "Loading...",
}: LoadingOverlayProps) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-4 rounded-3xl bg-white/80 backdrop-blur-sm">
      <Spinner size="lg" />

      <p className="text-sm text-slate-600">
        {message}
      </p>
    </div>
  );
}