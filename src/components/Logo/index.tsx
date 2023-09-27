import LogoIMG from "@/assets/logo.svg";
import Image from "next/image";

const Logo = ({ className }: React.ComponentProps<"img">) => {
  return <Image className={className} src={LogoIMG} alt="Logo WebJump" />;
};

export default Logo;
