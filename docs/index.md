---
layout: home
pageClass: home-page

hero:
  name: "Welcome to ML4W"
  image:
    src: /ml4w.svg
    alt: ML4W logo
    style: "width: 200px; height: auto;"  
  tagline: Linux tutorials, apps and the ML4W OS. 
  actions:
    - theme: brand
      text: ML4W OS Hyprland
      link: https://ml4w.com/os
    - theme: brand
      text: Dotfiles Installer
      link: https://ml4w.com/dotfiles-installer
    - theme: alt
      text: YouTube Channel ↗
      link: https://www.youtube.com/channel/UC0sUzmZ0CHvVCVrpRfGKZfw

---

Linux is an exceptional operating system that powers my business and personal life every day. It’s stable, fast, and highly customizable to meet individual needs. On my YouTube channel, I share my Arch Linux setup, share experiences with different Linux distributions, featuring window managers like Hyprland, Niri and Qtile.

In addition, I develop ML4W OS. An advanced and full-featured Operating System and Dotfiles Configuration based on the dynamic tiling window manager Hyprland. It's easy to install from a Live ISO or with the Dotfiles Installer.

## Lastest Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/EZKFv13owz0?si=bZxzfYnKvr3yF0VQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, var(--vp-c-purple-3), var(--vp-c-brand-3));
  --vp-home-hero-image-filter: blur(44px);

  --overlay-gradient: color-mix(in srgb, var(--vp-c-brand-1), transparent 40%);
}

.dark {
  --overlay-gradient: color-mix(in srgb, var(--vp-c-brand-1), transparent 75%);
}

.home-page {
  background:
    linear-gradient(200deg, transparent 25%, var(--overlay-gradient) 55%, transparent 85%),
    radial-gradient(ellipse at 80% 180%, var(--overlay-gradient), transparent 60%),
    var(--vp-c-bg);
  background-repeat: no-repeat;
  background-size: cover;

  .VPFeature a {
    font-weight: bold;
    color: var(--vp-c-brand-2);
  }

  .VPFooter {
    background-color: transparent !important;
    border: none;
  }

  .VPNavBar {
    background-color: transparent !important;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);

    div.divider {
      display: none;
    }
  }
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
