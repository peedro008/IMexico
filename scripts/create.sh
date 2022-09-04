name=$1
proyect=$2

./createAction.sh $name
./createReducer.sh $name

./createComponent.sh $name
./createView.sh $name
./createController.sh $name
./createRoute.sh $name $proyect
