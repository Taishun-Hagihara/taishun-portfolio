import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="mx-auto max-w-4xl p-6">
                <Outlet />
            </main>
        </div>
    );
}
