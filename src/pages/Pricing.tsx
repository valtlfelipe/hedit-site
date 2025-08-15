
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col items-center justify-center py-24 sm:py-32">
        <div className="text-center mb-8 px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Pricing</h1>
          <p className="mt-3 text-lg text-muted-foreground sm:mt-4">
            All features free for personal use.
          </p>
          <p className="mt-1 text-lg text-muted-foreground">
            Support ongoing development with a commercial license.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full p-4">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Personal</CardTitle>
              <CardDescription>For personal use</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold mb-4">$0</div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Personal use only</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Access all features</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Community support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link to="/download">Download Now</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-primary">
            <CardHeader>
              <CardTitle>Commercial</CardTitle>
              <CardDescription>For professional and commercial use</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-4xl font-bold mb-4">$40<span className="text-lg font-normal text-muted-foreground">/user per year</span></div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Commercial use</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Support indie developer</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <a href="https://www.creem.io/payment/prod_7UiSIBPjvS5GxHahFnq2U2">Buy Now</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <p className="mt-8 text-sm text-center text-muted-foreground max-w-2xl px-4">
          For bulk purchases and other inquiries, contact hello@hedit.app.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
