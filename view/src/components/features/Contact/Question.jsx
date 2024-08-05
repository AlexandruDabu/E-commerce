export default function Question({index, question, indexActive, setIndexActive}) {
    const togglePanel = () =>{
        if (index === indexActive) {
            setIndexActive(null); // Set indexActive to null or undefined to indicate no active item
        } else {
            setIndexActive(index); // Set the current index as active
        }
    }
    const isCurrentActive = index === indexActive;
    return (
        <>
        <button className={`faqQuestion ${isCurrentActive ? 'active' : ''}`} style={{borderRadius: isCurrentActive ? '16px 16px 0 0' : '16px'}}  onClick={togglePanel}>
        {question.question}<i class="fa-solid fa-chevron-down"></i>
        </button>
        <div className='panel' style={{display: isCurrentActive ? 'block' : 'none'}}>
            <p>
                {question.answear}
            </p>
        </div>
        </>
    )
}