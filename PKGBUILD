# Maintainer: kug1 kug1@duck.com
pkgname=aniquote
pkgver=4.1.0
pkgrel=1
epoch=1
pkgdesc="CLI tool for fetching anime quotes in your terminal."
arch=('x86_64')
url="https://github.com/kug1/aniquote"
license=('MIT')
depends=('deno')
makedepends=('deno')
source=("https://github.com/kug1/$pkgname/archive/refs/tags/v$pkgver.tar.gz")

prepare() {
        cd "$pkgname-$pkgver"
        patch -p1 -i "$srcdir/$pkgname-$pkgver.patch"
}

build() {
        cd "$pkgname-$pkgver"
        ./configure --prefix=/usr
        make
}

check() {
        cd "$pkgname-$pkgver"
        make -k check
}

package() {
        cd "$pkgname-$pkgver"
        make DESTDIR="$pkgdir/" install
}
