import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Star, CreditCard } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AppointmentModal } from "@/components/appointment-modal"

export default function BrandsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Page Header */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">BRANDS WE SERVICE</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Our certified technicians are trained to repair all major appliance brands and models.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content - Brand Logos */}
          <div className="lg:col-span-2">
            <div className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {brandLogos.map((brand, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-16 w-full">
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mb-6 text-muted-foreground">
              Our technicians are qualified to work on many other appliances.
              <Link href="/contact" className="ml-1 text-primary hover:underline">
                Contact our office
              </Link>{" "}
              if you have questions.
            </p>

            {/* Brands We Service Section */}
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold">Brands We Service</h2>
              <p className="mb-6 text-muted-foreground">
                Our technicians are trained to work on all major appliance brands, including:
              </p>

              <div className="grid gap-2 sm:grid-cols-3">
                {brands.map((brand, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Request Service Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">Need Appliance Repair?</h3>
                <p className="mb-6 text-muted-foreground">
                  Our expert technicians are ready to help with your appliance repair needs.
                </p>
                <AppointmentModal buttonText="Request Repair Service" fullWidth={true} />
              </CardContent>
            </Card>

            {/* Customer Testimonial */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-center text-lg font-semibold">OUR HAPPY CUSTOMERS</h3>
                <div className="flex flex-col items-center">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                    A
                  </div>
                  <p className="mb-1 font-medium">Anderson J Flennoy</p>
                  <div className="mb-3 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    "The Natomas Appliance technician was courteous, professional, and thorough. I would call the
                    company again for any repairs for my appliances."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-center text-lg font-semibold">WE ACCEPT</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-primary" />
                    <span>All major credit and debit cards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-primary" />
                    <span>Tap to pay / Mobile payments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Personal checks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Cash</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

const brandLogos = [
  {
    name: "Whirlpool",
    logo: "https://cdn.freebiesupply.com/logos/large/2x/whirlpool-logo-png-transparent.png",
  },
  {
    name: "GE",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/1200px-General_Electric_logo.svg.png",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
  },
  {
    name: "LG",
    logo: "https://kreafolk.com/cdn/shop/articles/lg-logo-design-history-and-evolution-kreafolk_03aeb70a-1702-4330-a3d7-91c344688e97.jpg?crop=center&height=1200&v=1717725016&width=1200",
  },
  {
    name: "Maytag",
    logo: "https://1000logos.net/wp-content/uploads/2017/12/Maytag-Logo-2008.jpg",
  },
  {
    name: "KitchenAid",
    logo: "https://logos-world.net/wp-content/uploads/2023/03/KitchenAid-Logo.png",
  },
  {
    name: "Frigidaire",
    logo: "https://1000logos.net/wp-content/uploads/2017/12/Frigidaire-Logo.png",
  },
  {
    name: "Bosch",
    logo: "https://1000logos.net/wp-content/uploads/2016/10/Bosch-Logo.png",
  },
  {
    name: "Electrolux",
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Electrolux-logo.png",
  },
  {
    name: "Kenmore",
    logo: "https://1000logos.net/wp-content/uploads/2017/12/Kenmore-logo.jpg",
  },
  {
    name: "Sub-Zero",
    logo: "https://mma.prnewswire.com/media/687732/Sub_Zero_Wolf_Cove_Logo.jpg?p=facebook",
  },
  {
    name: "Viking",
    logo: "https://cdn4.volusion.store/t7pve-sxg3h/v/vspfiles/photos/001955-000-2.png?v-cache=1607080982",
  },
  {
    name: "Thermador",
    logo: "https://media.wired.com/photos/6189590906899104cfb36c8d/master/w_1600%2Cc_limit/2017_Therm_Logo_Black-01.png",
  },
  {
    name: "Miele",
    logo: "https://cf-images.us-east-1.prod.boltdns.net/v1/static/2135351001/1df95ab9-37e8-4d57-b48d-fe1e65eddc0f/94c65607-237b-4842-9611-b9b09377de47/1280x720/match/image.jpg",
  },
]

const brands = [
  "Whirlpool",
  "GE",
  "Samsung",
  "LG",
  "Maytag",
  "KitchenAid",
  "Frigidaire",
  "Bosch",
  "Electrolux",
  "Kenmore",
  "Sub-Zero",
  "Wolf",
  "Viking",
  "Thermador",
  "Miele",
  "Admiral",
  "Amana",
  "Caloric",
  "Estate",
  "Fulgor",
  "Gibson",
  "Hotpoint",
  "IKEA",
  "Jenn-Air",
  "Lowe's",
  "Magic Chef",
  "Modern Maid",
  "Montgomery Ward",
  "Roper",
  "Speed Queen",
  "Tappan",
  "Westinghouse",
]
