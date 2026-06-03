import { SimpleActionPage } from "../components/SimpleActionPage";
import { sharedActionContent } from "../components/sharedActionContent";

export default function FacebookPage() {
  return (
    <SimpleActionPage
      {...sharedActionContent}
      buttonHref="https://us06web.zoom.us/webinar/register/6317787390786/WN_37SeV2ttRna6bRuS3z_KrA"
    />
  );
}
