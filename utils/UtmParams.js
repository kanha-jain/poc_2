import { useRouter } from "next/router";
import Cookies from "js-cookie";

const UtmParams = () => {
  const router = useRouter();
  const query = router.query;
  const { utm_source, utm_medium, utm_campaign } = query;
  Cookies.set("utm_source", utm_source || "", {
    sameSite: "lax",
  });
  Cookies.set("utm_campaign", utm_campaign || "", {
    sameSite: "lax",
  });
  Cookies.set("utm_medium", utm_medium || "", {
    sameSite: "lax",
  });
  return <></>;
};

export default UtmParams;
