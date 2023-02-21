import type { Icon } from 'lucide-react'

interface props {
  icon: Icon;
  color: string;
}

function ButtonIcon({ icon: Icon, color }: props) {
  return (
    
      <div className="h-12 flex justify-center items-start border-transparent  ">
         <Icon strokeWidth={1.5} size={28} color={color} />
      </div>

  )
}

export default ButtonIcon;