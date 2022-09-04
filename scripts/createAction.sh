scripts=$PWD
actions="../src/store/actions"

nameMinus=$1
nameMayus=${1^^}
newObject="NEW_ENTITY: {\n\t\tENTITY: ENTITY.NEW_ENTITY,\n\t\tENTITY_MAYUS: ENTITY.NEW_ENTITY.toUpperCase(),\n\t\tENTITY_PLURAL: ENTITY.NEW_ENTITY \+ 's',\n\t\tENTITY_MAYUS_PLURAL: (ENTITY.NEW_ENTITY \+ 's').toUpperCase(),\n\t\tENTITY_CAMEL_CASE:\n\t\t\tENTITY.NEW_ENTITY.toUpperCase() \+ ENTITY.NEW_ENTITY.slice(1),\n\t\tENTITY_CAMEL_CASE_PLURAL:\n\t\t\t(ENTITY.NEW_ENTITY \+ 's').toUpperCase() \+\n\t\t\t(ENTITY.NEW_ENTITY \+ 's').slice(1),\n\t},\n\t//ADD NEW ENTITY HERE"

# echo $newObject
cd $scripts
cd $actions

#sed -i 's/\r$//' createAction.sh

sed -i "s+NEW_ENTITY: 'useless text',+${nameMayus}: '${nameMinus}',\n\tNEW_ENTITY: 'useless text',+g" entities.tsx
sed -i "s/NEW_ENTITY: {/${nameMayus}: {/g" entities.tsx
sed -i "s/ENTITY.NEW_ENTITY/ENTITY.${nameMayus}/g" entities.tsx
sed -i "s+//ADD NEW ENTITY HERE+${newObject}+g" entities.tsx

cp -a "./entity.actions.ts" "./${nameMinus}.actions.ts"

sed -i "s+NEW_ENTITY+${nameMayus}+g" ${nameMinus}.actions.ts

cd $scripts


