import { IconCoffee } from '@tabler/icons-react';

const Card: React.FC<{ image: string; name: string; gitUser: string }> = ({ image, name, gitUser }) => {
  return (
    <div className="flex w-32 flex-col items-center justify-center gap-2 mt-10 rp">
        <div className="card--style">
            <img className="img__bg" src="../pages/assets/card-bg.png"/>
            <div className="card--style__logo">
                <img className='card__logo' src="../public/static/cq-icon.png"/>
            </div>
            <div className="gradient"></div>
        </div>
    </div>
  );
};

export default Card;
