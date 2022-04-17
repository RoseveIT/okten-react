import css from "./MainLayout.module.css"

const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <a href="/home">Home</a>
                <a href="/users">Home</a>
                <a href="/posts">Home</a>
                <a href="/about">Home</a>
            </div>
        </div>
    );
};

export {MainLayout};