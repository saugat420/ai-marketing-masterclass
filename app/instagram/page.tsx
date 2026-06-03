import { SimpleActionPage } from "../components/SimpleActionPage";
import { sharedActionContent } from "../components/sharedActionContent";

export default function InstagramPage() {
  return (
    <SimpleActionPage
      {...sharedActionContent}
      buttonHref="https://us06web.zoom.us/webinar/register/3417787390825/WN_37SeV2ttRna6bRuS3z_KrA"
    />
  );
}
