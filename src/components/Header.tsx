import '@/css/header.css'
import { Tooltip } from 'react-tooltip'
import { faChartSimple, faChartColumn, faQuestion, faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header bg-slate-700 py-14 h-screen w-32'>
            <ul className='list-none flex justify-between flex-col text-right h-full align-right'>
                <li>
                    <Link to="/grades" className='grades-link'>
                        <FontAwesomeIcon icon={faChartSimple} />
                    </Link>
                </li>
                <li>
                    <Link to="/history" className='history-link'>
                        <FontAwesomeIcon icon={faChartColumn}/>
                    </Link>
                </li>
                <li>
                    <Link to="/schedule" className='sched-gen-link'>
                        <FontAwesomeIcon icon={faTable}/>
                    </Link>
                </li>
                <li>
                    <Link to="/about" className='about-link'>
                        <FontAwesomeIcon icon={faQuestion}/>
                    </Link>
                </li>
            </ul>
            <Tooltip anchorSelect='.history-link' place="right">
                Grade History
            </Tooltip>
            <Tooltip anchorSelect='.sched-gen-link' place="right">
                Generate a Schedule
            </Tooltip>
            <Tooltip anchorSelect='.about-link' place="right">
                About
            </Tooltip>
            <Tooltip anchorSelect='.grades-link' place="right">
                View Your Grades
            </Tooltip>
        </div>
    );
}