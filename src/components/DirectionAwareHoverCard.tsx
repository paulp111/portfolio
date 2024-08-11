import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const videoUrl = "/videos/lambo.mp4";

  return (
    <div className="m-4">
      <DirectionAwareHover videoUrl={videoUrl}>
        <p className="font-bold text-xl">Preview 1: Footer</p>
        <p className="font-normal text-sm">
          A visually striking footer implemented with Three.js, adding dynamic
          3D graphics to the website.
        </p>
      </DirectionAwareHover>
    </div>
  );
}
