import { SimpleActionPage } from "../components/SimpleActionPage";
import { sharedActionContent } from "../components/sharedActionContent";

export default function YouTubePage() {
  return (
    <SimpleActionPage
      {...sharedActionContent}
      buttonHref="https://us06web.zoom.us/webinar/register/1017787390861/WN_37SeV2ttRna6bRuS3z_KrA"
    />
  );
}
