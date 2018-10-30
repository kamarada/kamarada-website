---
date: 2018-10-30 19:50:00
image: '/files/2018/10/certificates-firefox-1.png'
layout: post
published: true
nickname: 'how-to-install-certificates'
title: 'How to install website certificates on Linux'
excerpt: "Have you ever visited a website and your browser adverted you that your connection is not secure or private? Sometimes, the connection is not really insecure. Understand what’s going on and learn how to install website certificates on Linux."
---

Have you ever visited a website and your browser adverted you that your connection is not secure or private?

{% include image.html src="/files/2018/10/certificates-firefox-1.png" %}

{% include image.html src="/files/2018/10/certificates-chrome-1.jpg" %}

## Understand what's going on

When you visit a website that uses secure connection (web address starting with `https`), your communication is encrypted to help ensure your privacy. Before establishing connection, the website presents to the browser a [**security certificate**][certificate] identifying itself.

Anyone can create a certificate claiming to be whoever they want. But usually website certificates are issued and signed by [**certificate authorities (CA's)**][ca], which also have their own certificates. On their turn, CA's certificates may be self-signed (in the case of a company's internal CA) or signed by other CA's so forth up to a **root certificate authority (root CA)**. This chain of certificates is called the **certificate hierarchy**.

Root CA's are public, well known and trusted organizations, such as the American [FCPCA][fcpca] or the Brazilian [ICP-Brasil][icp-brasil]. Usually root CA's certificates are previously known by browsers.

When you visit an [HTTPS][https] website, the browser checks that its certificate is valid and the certificate hierarchy ends on a known CA certificate. If that checking succeeds, the browser displays a green lock icon near the address bar, indicating the website you are visiting is actually the website that it claims to be. You are safe to stay on it, enter passwords, provide credit card numbers and send or receive other sensitive data. Always look for the green lock icon when accessing banking or shopping websites.

When you visit an HTTPS website, but the certificate checking does not succeed, the browser adverts you that your connection is not secure or private. If that is the case, you need to proceed with caution: don't enter any sensitive information on this page. If possible, leave it.

Sometimes, the connection is not really insecure. Security alerts may appear, for example, when you visit a web system of your organization, signed by an internal CA whose certificate is not previously known by the browser. In that case, you need to manually install your organization's CA certificate to prevent false alerts.

Also Brazilian citizens always see privacy alerts when visiting websites of the Brazilian government. Browsers don't come with the [ICP-Brasil][icp-brasil] certificate out-of-the-box because it does not comply to [Mozilla security requirements, which is an 11-year old bug][bugzilla]. So, Brazilian citizens need to manually install it. Some Brazilian public organizations have adopted workarounds: for instance, the [Federal Police of Brazil][pf] sign its forms (e.g. the [passport application form][pf-passport]) with a certificate issued by Let’s Encrypt, but content-only pages (including [their own home page][pf]) are not signed at all. [Let’s Encrypt][letsencrypt] is an American non-profit organization that issues certificates for free for anyone and [is trusted by browsers][letsencrypt-trusted].

## Install the CA certificate

Let's see how to add a CA certificate to the [Mozilla Firefox][firefox] and [Google Chrome][chrome] browsers, so they trust certificates signed by that CA. Same instructions for Chrome apply to its [open source][opensource] base [Chromium][chromium].

I'm going to use [SIGEPE][sigepe] as example, which is a Brazilian government web system whose certificate is signed by [ICP-Brasil][icp-brasil], the Brazilian root CA.

In your case, the certificate you are going to install may be from your company's internal CA. You should retrieve it with your company's network administrator.

### Mozilla Firefox

Pull down the **Firefox menu** (top right corner of the window) and select **Preferences**:

{% include image.html src="/files/2018/10/certificates-firefox-2.jpg" %}

Select **Privacy & Security** by the left and click on **View Certificates** by the right, at the end of the page:

{% include image.html src="/files/2018/10/certificates-firefox-3.jpg" %}

In the **Certificate Manager** dialog, select the **Authorities** tab and click on **Import**:

{% include image.html src="/files/2018/10/certificates-firefox-4.png" %}

Select the CA certificate file you want to import.

Check all the options to fully trust the certificate and click on **OK**:

{% include image.html src="/files/2018/10/certificates-firefox-5.jpg" %}

Click on **OK** in the **Certificate Manager** dialog and close the **Preferences** tab.

Refresh the page you were trying to visit and realize the green lock icon at the begining of the address bar, indicating the website is safe to visit:

{% include image.html src="/files/2018/10/certificates-firefox-6.jpg" %}

### Google Chrome

Pull down the **Chrome menu** (top right corner of the window) and select **Settings**:

{% include image.html src="/files/2018/10/certificates-chrome-2.jpg" %}

On the **Search settings** field, type `certificates`. Chrome filters related settings. Click on **Manage certificates**:

{% include image.html src="/files/2018/10/certificates-chrome-3.jpg" %}

Select the **Authorities** tab and click on **Import**:

{% include image.html src="/files/2018/10/certificates-chrome-4.jpg" %}

Select the CA certificate file you want to import.

Check all the options to fully trust the certificate and click on **OK**:

{% include image.html src="/files/2018/10/certificates-chrome-5.jpg" %}

Close the **Settings** tab.

Refresh the page you were trying to visit and realize the lock icon to the left of the web address, indicating the website is safe to visit:

{% include image.html src="/files/2018/10/certificates-chrome-6.jpg" %}

## References

- [Why Does Google Chrome Say Websites Are "Not Secure"?][howtogeek]
- [Secure Website Certificate - Firefox Help][certificate]
- [Check if a site's connection is secure - Google Chrome Help][chrome-help]
- [PSM:Changing Trust Settings - MozillaWiki][mozilla-wiki]
- [Install self-generated root certificate authorities - BounCA.org generate self-signed SSL certificates][bounca]

[certificate]:          https://support.mozilla.org/en-US/kb/secure-website-certificate
[ca]:                   https://en.wikipedia.org/wiki/Certificate_authority
[fcpca]:                https://fpki.idmanagement.gov/ca/
[icp-brasil]:           http://www.iti.gov.br/icp-brasil
[https]:                https://en.wikipedia.org/wiki/HTTPS
[bugzilla]:             https://bugzilla.mozilla.org/show_bug.cgi?id=438825
[pf]:                   http://www.pf.gov.br
[pf-passport]:          https://servicos.dpf.gov.br/sinpa/inicializacaoSolicitacao.do?dispatch=inicializarSolicitacaoPassaporte
[letsencrypt]:          https://letsencrypt.org/
[letsencrypt-trusted]:  https://letsencrypt.org/2018/08/06/trusted-by-all-major-root-programs.html
[firefox]:              https://www.mozilla.org/firefox/
[chrome]:               https://www.google.com/chrome/
[opensource]:           https://opensource.org/osd-annotated
[chromium]:             https://www.chromium.org/
[sigepe]:               https://servidor.sigepe.planejamento.gov.br
[howtogeek]:            https://www.howtogeek.com/359298/why-does-google-chrome-say-websites-are-%E2%80%9Cnot-secure%E2%80%9D/
[chrome-help]:          https://support.google.com/chrome/answer/95617
[mozilla-wiki]:         https://wiki.mozilla.org/PSM:Changing_Trust_Settings
[bounca]:               https://www.bounca.org/tutorials/install_root_certificate.html
