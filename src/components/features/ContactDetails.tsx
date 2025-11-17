import { MapPin, Clock, Phone, Wrench, AlertCircle, Map } from "lucide-react";

// CRITICAL SEO DATA - Must match GBP
const OFFICE_PHONE = "035 550 0211";
const TOWING_NUMBER = "072 311 5870";
const ADDRESS = "Jacaranda Ave, Mtubatuba, 3935";
const HOURS = "Mon-Fri: 7:30 am - 5:00 pm";

// From Research.txt [cite: 160]
const serviceAreas = [
  "Mtubatuba",
  "St. Lucia",
  "Richards Bay",
  "Hluhluwe",
  "KZN North Coast"
];

export function ContactDetails() {
  return (
    <div className="space-y-8">
      
      {/* Workshop Office Details */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold flex items-center space-x-2 text-foreground">
          <Wrench className="h-6 w-6 text-primary shrink-0" />
          <span>Workshop Office</span>
        </h3>
        <p className="text-muted-foreground text-lg">
          For quotes, bookings, and all non-emergency inquiries.
        </p>
        
        <div className="space-y-4 text-base pt-2">
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
            <span className="text-foreground font-semibold">{ADDRESS}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-primary shrink-0" />
            <span className="text-foreground font-semibold">{HOURS}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary shrink-0" />
            <a href={`tel:${OFFICE_PHONE.replace(/\s/g, '')}`} className="font-bold text-lg text-foreground hover:text-primary transition-colors">
              {OFFICE_PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Emergency Towing Section */}
      <div className="space-y-4 pt-6 border-t border-border">
        <h3 className="text-2xl font-bold flex items-center space-x-2 text-destructive">
          <AlertCircle className="h-6 w-6 shrink-0" />
          <span>24/7 Emergency Towing</span>
        </h3>
         <p className="text-muted-foreground text-lg">
          For immediate accident & breakdown assistance only.
        </p>
        <div className="flex items-center space-x-3">
          <Phone className="h-6 w-6 text-destructive shrink-0" />
          <a href={`tel:${TOWING_NUMBER.replace(/\s/g, '')}`} className="text-2xl font-extrabold text-destructive hover:underline break-all">
            {TOWING_NUMBER}
          </a>
        </div>
      </div>

      {/* Service Area Section (Good for SEO) */}
      <div className="space-y-4 pt-6 border-t border-border">
        <h3 className="text-2xl font-bold flex items-center space-x-2 text-foreground">
          <Map className="h-6 w-6 text-primary shrink-0" />
          <span>Our Service Area</span>
        </h3>
        <p className="text-muted-foreground text-lg">
          We proudly serve the entire Zululand region, including:
        </p>
        <div className="flex flex-wrap gap-2">
          {serviceAreas.map((area) => (
            <div key={area} className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">
              {area}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}