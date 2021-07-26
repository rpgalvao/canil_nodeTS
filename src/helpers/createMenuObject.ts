type MenuOptions = ''|'all'|'dog'|'cat'|'fish';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let returnMenuObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false,
    };

    if (activeMenu !== '') {
        returnMenuObject[activeMenu] = true;
    }

    return returnMenuObject;
}