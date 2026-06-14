import { SimpleActionPage } from "../components/SimpleActionPage";
import { sharedActionContent } from "../components/sharedActionContent";

export default function CourseWorkflowPage() {
  return (
    <SimpleActionPage
      {...sharedActionContent}
      buttonHref="https://us06web.zoom.us/webinar/register/9017814287563/WN_P-5fw5ThRbaQWt7Sr7i__g"
    />
  );
}
