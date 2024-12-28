// @ts-ignore
import profilePicture from "../../assets/profile_picture.jpeg";

export default function ProfileImage() {
    return (
        <div className="relative">
            {/* Glowing effect */}
            <div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full opacity-75 blur-lg group-hover:opacity-100 animate-pulse"/>

            {/* Image container */}
            <div className="relative">
                <div className="w-48 h-48 rounded-full border-2 border-blue-500/50 p-1">
                    <img
                        src={profilePicture}
                        alt="Professional headshot"
                        className="rounded-full w-full h-full object-cover"
                    />
                </div>

                {/*/!* Status indicator *!/*/}
                {/*<div className="absolute bottom-2 right-2 w-4 h-4 bg-blue-400 rounded-full">*/}
                {/*    <div className="absolute inset-0 bg-blue-400   rounded-full animate-ping"/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}