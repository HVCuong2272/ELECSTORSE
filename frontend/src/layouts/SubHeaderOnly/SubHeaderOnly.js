import SubHeader from '../components/SubHeader';

function SubHeaderOnly({ children }) {
    return (
        <div>
            <SubHeader />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default SubHeaderOnly;
