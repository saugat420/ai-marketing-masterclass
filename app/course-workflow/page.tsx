import { SimpleActionPage } from "../components/SimpleActionPage";
import { sharedActionContent } from "../components/sharedActionContent";

export default function CourseWorkflowPage() {
  return (
    <SimpleActionPage
      {...sharedActionContent}
      buttonHref="https://us06web.zoom.us/webinar/register/6017868589253/WN__Tx9Q39ATK6Yokfsmh9ZMg"
    />
  );
}
