import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";


// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ThematicFocus from "./pages/ThematicFocus";
import Fowa from "./pages/events/Fowa";
import Twha from "./pages/events/Twha";
import Registration from "./pages/Registration";
import Director from "./pages/leadership/Director";
import Patrons from "./pages/leadership/Patrons";
import Partners from "./pages/Partners";
import MediaGallery from "./pages/MediaGallery";
import Volunteer from "./pages/Volunteer";
import Merchandise from "./pages/Merchandise";
import Curator from "./pages/Curator";
import Contact from "./pages/Contact";
import Donation from "./pages/Donation";
import NotFound from "./pages/not-found.tsx";
import {TooltipProvider} from "./components/ui/tooltip.tsx";
import {Toaster} from "./components/ui/toaster.tsx";

function Router() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/thematic-focus" component={ThematicFocus} />

            <Route path="/events/fowa" component={Fowa} />
            <Route path="/events/twha" component={Twha} />

            <Route path="/register" component={Registration} />

            <Route path="/leadership/director" component={Director} />
            <Route path="/leadership/patrons" component={Patrons} />

            <Route path="/partners" component={Partners} />
            <Route path="/gallery" component={MediaGallery} />
            <Route path="/volunteer" component={Volunteer} />
            <Route path="/merchandise" component={Merchandise} />
            <Route path="/curator" component={Curator} />
            <Route path="/contact" component={Contact} />
            <Route path="/donate" component={Donation} />
            <Route component={NotFound} />
        </Switch>
    );
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Router />
            </TooltipProvider>
        </QueryClientProvider>
    );
}

export default App;
