import { SimpleActionPage } from "../components/SimpleActionPage";
import { sharedActionContent } from "../components/sharedActionContent";

export default function MasterclassWorkflowPage() {
  return (
    <SimpleActionPage
      {...sharedActionContent}
      buttonHref="https://us06web.zoom.us/webinar/register/9617804921102/WN_37SeV2ttRna6bRuS3z_KrA"
    />
  );
}
