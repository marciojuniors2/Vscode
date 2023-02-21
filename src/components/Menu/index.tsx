import React from 'react'
import { Bug, Cog, Files, FlaskConical, GitFork, Monitor, Puzzle, Search, User } from 'lucide-react'
import ButtonIcon from './ButtonIcon'

function index() {
  return (
    <div className="flex flex-col py-2 h-full justify-between ">
        <div className="flex flex-col ">
            <ButtonIcon icon={Files} color={"#E0DEF2"} />
            <ButtonIcon icon={Search} color={"#8F8CA8"} />
            <ButtonIcon icon={GitFork} color={"#8F8CA8"} />
            <ButtonIcon icon={Bug} color={"#8F8CA8"} />
            <ButtonIcon icon={Puzzle} color={"#8F8CA8"} />
            <ButtonIcon icon={Monitor} color={"#8F8CA8"} />
            <ButtonIcon icon={FlaskConical} color={"#8F8CA8"} />
        </div>
        <div className="flex flex-col items-center ">
            <ButtonIcon icon={User} color={"#8F8CA8"}/>
            <ButtonIcon icon={Cog} color={"#8F8CA8"}/>
        </div>
    </div>

    )
}

export default index