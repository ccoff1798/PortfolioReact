import ResumePdf from '../components/pdf/ResumePdf.pdf'
export default function Resume() {
    return (
        <div>
            <h1 className='center'>Resume</h1>
            <iframe className = 'center' src={ResumePdf}
            width='100%' height='900rem'>
            </iframe>
        </div>
    );
  }
  