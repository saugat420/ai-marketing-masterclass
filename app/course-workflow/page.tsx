import { SimpleActionPage } from "../components/SimpleActionPage";
import { sharedActionContent } from "../components/sharedActionContent";

export default function CourseWorkflowPage() {
  return (
    <SimpleActionPage
      {...sharedActionContent}
      buttonHref="https://us06web.zoom.us/webinar/register/4017868587627/WN_ZfXzeajoSNeN3IoDniEDfg"
    />
  );
}
