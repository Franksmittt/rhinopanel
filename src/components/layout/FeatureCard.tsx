// Professional Feature Card Component

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode; 
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 bg-white group">
      <CardHeader className="flex-row items-start space-x-4 pb-4">
        <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg font-bold mb-2">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
