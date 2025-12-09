import SideNav from "./sidenav";

export default async function NoProducts() {
    return (
        <main className="bg-white dark:bg-gray-900 py-10">
            <div className="max-w-[1400px] mx-auto flex gap-10 px-4">
                <SideNav />

                <section className="flex-1">
                    <h1 className="page-header text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                        No Products Found!
                    </h1>
                </section>
            </div>
        </main>

    );
}