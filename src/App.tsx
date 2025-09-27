import { AppFooter, AppHeader } from "./components/common";
import { AppSidebar } from "./components/common/AppSidebar";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App(){



    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="page">
        <AppHeader/>
        <div className="container">
           <main className="w-full h-full min-h-[720px] flex p-6 gap-6">
            <AppSidebar/>
            <section></section>

           </main>

        </div>
        <AppFooter/>
        </div>
        </ThemeProvider>
    );
}

export default App;