import { useRive } from "@rive-app/react-canvas";

export default function Eye() {
  const { rive, RiveComponent } = useRive({
    src: "../assets/eye.riv",
    autoplay: true,
  });

  return (
    <RiveComponent
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
}
