## Framer Motion

`framer-motion` is a React animation library. It is slightly larger than `react-spring`, shipping at 25kb gzipped (there's a PR to reduce bundle size by ~12kb). The tradeoff is that developers are provided a better API with access to more ways to animate components.

### `motion`

To begin with animation in `framer-motion` you will need to

```javascript
import { motion } from 'framer-motion`,
```

Any element you want to animate needs to be prepended by this import. You can use any element. There are multiple additional props available on these `motion.element`s, the most used are `initial` and `animate`. Other helpful props include `variants` and `custom`. Additionally there are eventHookProps on `motion.elements` that follow the pattern of `whileEvent`, `onEventStart`, `onEventEnd`. Events that you can listen to are `hover`, `tap`, `pan`, and `drag` (drag events require an additional prop called `drag`). I won't write up examples for each eventHook, but they will all work just like the major props `initial`, `animate`, `exit` (can take object or string/variant key).

### `AnimatePresence` and the `exit` prop

`AnimatePresence` is another export from `framer-motion`. It is a wrapper component that goes around a condition that will render your `motion.element`. If the condition becomes false the `exit` animation will trigger first before unmounting the component.

```javascript
/*
  Animate states can take an object containing the style properties
  to be animated
*/
<motion.element
  initial={{ scale: 0 }} // Starts with no scale
  animate={{ scale: 1 }} // On mount animates to scale: 1
  exit={{ scale: 2 }}    // Doubles in scale on unmount
>
  {children}
</motion.element>

// ===============================================================

/**
 * If a motion.element has a variants prop, the animate states can
 * also take strings that match the keys of the passed variants
 */

const variants = {
  open: { scale: 1 },
  close: { scale: 0 }
}
<motion.element
  initial='close'     // Starts with no scale
  animate='open'      // On mount animates to scale: 1
  exit='close'        // Goes back to no scale on unmount
  variants={variants} // Must have variants prop to use strings/keys
>
  {children}
</motion.element>

// ===============================================================

/**
 *Variants can also be dynamic, by making the key a method
 */

const variants = {
  visible: i => ({
    opacity: 1,
    transition: {
      delay: i * 0.2
    }
  }),
  hidden: { opacity: 0 }
}
return items.map((item, i) => (
  <motion.li
    custom={i}
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={variants}
  />
))

// ===============================================================

/**
 * Configurations can also be passed to the animation objects for further control
*/

const variants = {
  open: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  close: {
    scale: 0,
    transition: {
      when: "afterChildren",
    },
  }
}
<motion.element
  initial='close'     // Starts with no scale
  animate='open'      // On mount animates to scale: 1
  exit='close'        // Goes back to no scale on unmount
  variants={variants} // Must have variants prop to use strings/keys
>
  {children}
</motion.element>
```
