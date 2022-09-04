name=$1
proyect=$2

./removeAction.sh $name
./removeReducer.sh $name

./removeComponent.sh $name
./removeView.sh $name
./removeController.sh $name
./removeRoute.sh $name $proyect