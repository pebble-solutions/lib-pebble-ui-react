# Composant Sidebar de Pebble (Français)

Le composant Sidebar de Pebble est une barre latérale flexible conçue pour l'intégration facile dans vos projets React. Il offre une navigation simple et un accès rapide aux différentes fonctionnalités de votre application.

## Installation

Pour utiliser le composant Sidebar de Pebble dans votre application React, vous pouvez l'installer via npm ou yarn :

```bash
npm install @pebble-solutions/lib-pebble-ui-react
```

ou

```bash
yarn add @pebble-solutions/lib-pebble-ui-react
```

## Exemples d'utilisation

### Exemple d'utilisation simple :

```javascript
import Sidebar from '@pebble-solutions/lib-pebble-ui-react/sidebarPebble/SidebarContainerPebble';

<Sidebar />
```

Ce code affichera une barre latérale par défaut sans aucun élément de menu.

### Exemple d'utilisation complet :

Pour utiliser le composant Sidebar avec un menu personnalisé, vous pouvez l'initialiser en fournissant une liste d'éléments de menu et une liste d'éléments de menu modaux :

```javascript
import Sidebar from '@pebble-solutions/lib-pebble-ui-react/sidebarPebble/SidebarContainerPebble';
import { getMenuItems, getMenuItemsModal } from './menu';

<Sidebar items={getMenuItems} itemsModal={getMenuItemsModal} />
```

Dans cet exemple, `getMenuItems` et `getMenuItemsModal` sont des fonctions qui renvoient respectivement une liste d'éléments de menu et une liste d'éléments de menu modaux. Assurez-vous d'importer ces fonctions depuis votre fichier de menu.

## Initialisation d'un fichier menu

Un fichier de menu est utilisé pour fournir les éléments de menu à afficher dans la barre latérale. Vous pouvez trouver un exemple de fichier de menu à l'emplacement suivant :

```
./menu.ts
```

## Personnalisation

Le composant Sidebar de Pebble offre plusieurs options de personnalisation pour répondre aux besoins spécifiques de votre application. Vous pouvez personnaliser le style, les éléments de menu et bien plus encore en utilisant les props disponibles.

## Contribuer

Si vous souhaitez contribuer à l'amélioration du composant Sidebar de Pebble, n'hésitez pas à ouvrir une pull request sur le dépôt GitHub officiel.

## Licence

Le composant Sidebar de Pebble est distribué sous la licence GPL-3.0. Consultez le fichier LICENSE pour plus d'informations.

---

Nous espérons que le composant Sidebar de Pebble vous sera utile dans vos projets React. N'hésitez pas à nous contacter pour toute question ou suggestion.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Pebble Sidebar Component (English)

The Pebble Sidebar component is a flexible sidebar designed for easy integration into your React projects. It provides simple navigation and quick access to various features of your application.

## Installation

To use the Pebble Sidebar component in your React application, you can install it via npm or yarn:

```bash
npm install @pebble-solutions/lib-pebble-ui-react
```

or

```bash
yarn add @pebble-solutions/lib-pebble-ui-react
```

## Usage Examples

### Simple Usage Example:

```javascript
import Sidebar from '@pebble-solutions/lib-pebble-ui-react/sidebarPebble/SidebarContainerPebble';

<Sidebar />
```

This code will display a default sidebar with no menu items.

### Complete Usage Example:

To use the Sidebar component with a custom menu, you can initialize it by providing a list of menu items and a list of modal menu items:

```javascript
import Sidebar from '@pebble-solutions/lib-pebble-ui-react/sidebarPebble/SidebarContainerPebble';
import { getMenuItems, getMenuItemsModal } from './menu';

<Sidebar items={getMenuItems} itemsModal={getMenuItemsModal} />
```

In this example, `getMenuItems` and `getMenuItemsModal` are functions that respectively return a list of menu items and a list of modal menu items. Make sure to import these functions from your menu file.

## Menu File Initialization

A menu file is used to provide the menu items to be displayed in the sidebar. You can find an example menu file at the following location:

```
./menu.ts
```

## Customization

The Pebble Sidebar component offers several customization options to meet the specific needs of your application. You can customize the style, menu items, and much more using the available props.

## Contributing

If you would like to contribute to the improvement of the Pebble Sidebar component, feel free to open a pull request on the official GitHub repository.

## License

The Pebble Sidebar component is distributed under the GPL-3.0 license. See the LICENSE file for more information.

---

We hope the Pebble Sidebar component will be helpful in your React projects. Feel free to contact us with any questions or suggestions.
