
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const ContactCard = () => {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg overflow-hidden border-gray-800">
      <CardHeader className="flex flex-col items-center space-y-4 pb-6 pt-8">
        <Avatar className="h-32 w-32 border-4 border-primary/10">
          <AvatarImage src="/placeholder.svg" alt="Фото профиля" />
          <AvatarFallback className="text-3xl">ИФ</AvatarFallback>
        </Avatar>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Иван Фёдоров</h2>
          <p className="text-muted-foreground">Веб-разработчик</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-primary" />
          <span>ivan@example.com</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-primary" />
          <span>+7 (999) 123-45-67</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-primary" />
          <span>Москва, Россия</span>
        </div>
        <p className="pt-4 pb-2 text-sm">
          Опытный веб-разработчик с более чем 5-летним стажем в создании 
          современных веб-приложений и сайтов. Специализируюсь на React, 
          TypeScript и CSS.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center gap-4 pb-8">
        <Button variant="outline" size="icon">
          <Github className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <Linkedin className="h-5 w-5" />
        </Button>
        <Button>
          <Mail className="h-5 w-5 mr-2" />
          Связаться
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
