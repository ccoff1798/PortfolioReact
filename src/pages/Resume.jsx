import { Document, Page } from 'react-pdf';
import ResumePdf from '../components/pdf/ResumePdf.pdf'
export default function Resume() {
    return (
        <div>
            <p>Here is a link to my Resume!</p>
            <iframe src={ResumePdf}
            width='75%' height='1000rem'>
            </iframe>
        </div>
    );
  }
  