Tech Talks: Ruby on Rails
=========================

Tech Talk Feedback App
----------------------
This document assumes an OS X development environment. If you're using Linux, the installation instructions won't be far off; you can probably just skip the Xcode and package manager sections and be good to go. If you're using Windows it's more complicated and I wish you luck.

### Prerequisites

#### [Xcode][xcode]
Install command line tools from the [Preferences > Downloads > Components][xcode-cli-tools] dialog within Xcode.

#### Package manager
RVM requires some prerequiste system libraries. I use [Homebrew][homebrew], but RVM also supports MacPorts and Fink. If you don't currently have a package manager, install Homebrew with the following CLI one-liner:

`ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"`

#### [RVM][rvm] (Ruby enVironment Manager)
These instructions may not be 100% correct since RVM is constantly changing. Follow any on-screen instructions you see! Run these commands:

1. `\curl -#L https://get.rvm.io | bash -s stable --autolibs=3`
2. `source ~/.rvm/scripts/rvm`
3. `rvm requirements`
4. `rvm install 2.0.0`

### Project environment setup

1. Create a directory for the application. I used `~/Documents/Tech Talks/Ruby on Rails/feedback`.
2. Create an [RVM gemset][rvm-gemsets] and [.rvmrc][rvm-rvmrc] file in the project directory: 
  1. `cd ~/Documents/Tech\ Talks/Ruby\ on\ Rails/feedback`
  2. `rvm --rvmrc --create use 2.0.0@tech-talk-rails`

### You should be good to go!
Enjoy the delight that is creating a Ruby on Rails application.

[xcode]:https://developer.apple.com/xcode/
[xcode-cli-tools]:http://developer.apple.com/library/ios/#documentation/DeveloperTools/Conceptual/WhatsNewXcode/Articles/xcode_4_3.html#//apple_ref/doc/uid/1006-SW2
[homebrew]:http://mxcl.github.com/homebrew/
[rvm]:https://rvm.io/rvm/install/
[rvm-gemsets]:https://rvm.io/gemsets/basics/
[rvm-rvmrc]:https://rvm.io/workflow/rvmrc/