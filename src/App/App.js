import { useState } from "react";

import StickyHeader from "../StickyHeader/StickyHeader";

import "./App.css";

const App = () => {
  const [stickyHeaderHeight, setStickyHeaderHeight] = useState(0);

  return (
    <div className="app">
      <StickyHeader setStickyHeaderHeight={setStickyHeaderHeight} />
      <main style={{ paddingTop: stickyHeaderHeight }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat
        risus justo, quis pharetra mauris hendrerit quis. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. In faucibus, ex nec consequat
        ultrices, eros mi aliquam odio, consectetur semper odio metus id arcu.
        Aenean ac efficitur dolor, sit amet bibendum lacus. Integer volutpat
        eleifend lectus, et rutrum nulla porta in. Quisque dapibus sagittis
        erat, id auctor est egestas ac. Maecenas porta ac nisi vel auctor. Sed
        quis nisi vel massa finibus dapibus. In luctus vitae lacus vel feugiat.
        Vivamus viverra ipsum at libero convallis bibendum. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Proin consequat risus justo, quis
        pharetra mauris hendrerit quis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. In faucibus, ex nec consequat ultrices, eros mi aliquam
        odio, consectetur semper odio metus id arcu. Aenean ac efficitur dolor,
        sit amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum
        nulla porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin consequat risus justo, quis pharetra mauris
        hendrerit quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In faucibus, ex nec consequat ultrices, eros mi aliquam odio,
        consectetur semper odio metus id arcu. Aenean ac efficitur dolor, sit
        amet bibendum lacus. Integer volutpat eleifend lectus, et rutrum nulla
        porta in. Quisque dapibus sagittis erat, id auctor est egestas ac.
        Maecenas porta ac nisi vel auctor. Sed quis nisi vel massa finibus
        dapibus. In luctus vitae lacus vel feugiat. Vivamus viverra ipsum at
        libero convallis bibendum.
      </main>
    </div>
  );
};

export default App;
