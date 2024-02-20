import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useCallback, useState } from "react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const textDesc = isCollapsed ? desc.slice(0, 230) : desc;

  const onClick = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed])
  
  return (
    <Card placeholder = "" color="transparent" shadow={false}>
      <CardHeader placeholder = "" floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody placeholder = "" className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography placeholder = "" variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography placeholder = "" className="mb-6 font-normal !text-gray-500">
          {textDesc}
        </Typography>
        {desc.length > 230 && 
          <Button placeholder = "" color="gray" size="sm" onClick={onClick}>
          {isCollapsed ? 'read more' : 'collapse'}
        </Button>
        }
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
