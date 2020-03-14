---
date: 2020-03-13 21:10:00 GMT-3
image: '/files/2018/12/libreoffice-signing.png'
layout: post
published: true
nickname: 'libreoffice-signing'
title: 'Signing ODF and PDF documents with LibreOffice'
excerpt: 'If you have a digital certificate, you can sign documents before sending them, so that who receives them feels confident about their authenticity and integrity. Today you are going to see how to do that with the LibreOffice office suite, which is able to sign not only ODF documents created by itself, but also any PDF documents (even those created by other programs).'
---

{% include image.html src="/files/2018/12/libreoffice-signing.png" %}

If you have a [digital certificate][how-to-token], you can sign documents before sending them, so that who receives them feels confident about their authenticity and integrity. Today you are going to see how to do that with the [LibreOffice] office suite, which is able to sign not only [ODF] documents created by itself, but also any [PDF] documents (even those created by other programs).

Although capable of signing, LibreOffice does not have its own public key infrastructure. Instead, it uses the infrastructure of a web browser to sign documents.

By default, LibreOffice looks for certificates and cryptographic media in the [Mozilla Firefox][firefox] configuration. So, if you use Firefox, you need to set it up before signing documents with LibreOffice. These two posts show how you can get everything working:

- [How to install website certificates on Linux][how-to-install-certificates]
- [Using smart cards on openSUSE Linux][how-to-token]

[Linux Kamarada 15.1][kamarada-15.1] brings [Chromium] as default web browser. If you use Chromium (or a Chromium-based browser, such as [Google Chrome][chrome], [Opera], [Vivaldi] or [Brave]), you can set up LibreOffice to use it instead of Firefox. But also in that case your browser must be setup first:

- [Setting up smart card authentication on Google Chrome / Chromium][chrome-token]

Then, refer to the end of this post to see how to set up LibreOffice to use Chromium.

Everyone on the same page (tokens and browsers setup), let's move on to LibreOffice!

## Signing an ODF document

The [Open Document Format (ODF)][odf] is the default file format for LibreOffice. The most common filename extensions used for Open Document files are:

- `.odt` for _**t**ext_ documents, opened with [Writer];
- `.ods` for _**s**preadsheets_, opened with [Calc];
- `.odp` for _**p**resentations_, opened with [Impress];
- `.odg` for _**g**raphics_ (diagrams, vector images), opened with [Draw];
- `.odb` for _data**b**ases_, opened with [Base]; and
- `.odf` for mathematical equations (_**f**ormulas_), opened with [Math].

Let's see how to sign a text document (a `.odt` file) with LibreOffice Writer (steps are similar for any application of the LibreOffice suite).

Open the **File** menu, **Digital Signatures** submenu, and click **Digital Signatures**:

{% include image.html src="/files/2020/03/libreoffice-signing-01-en.jpg" %}

If you haven't previously saved the document, LibreOffice alerts you that it has to be saved before it can be signed, and asks if you want to save it. Click **Yes** and save the document:

{% include image.html src="/files/2020/03/libreoffice-signing-02-en.jpg" %}

On the **Digital Signatures** dialog box, click **Sign Document**:

{% include image.html src="/files/2020/03/libreoffice-signing-03-en.jpg" %}

LibreOffice asks for your token's PIN password. Type it and click **OK**.

On the **Select Certificate** dialog box, choose the certificate to be used to sign and click **Sign**:

{% include image.html src="/files/2020/03/libreoffice-signing-04-en.jpg" %}

Back to the **Digital Signatures** dialog, note that the digital signature of the document is shown:

{% include image.html src="/files/2020/03/libreoffice-signing-05-en.png" %}

Click **Close**.

## Checking the digital signature of an ODF document

When you open a signed ODF document, LibreOffice informs that the document is signed. In other words, you are seeing the original, unchanged document. It also shows the **Digital Signature** icon on the status bar:

{% include image.html src="/files/2020/03/libreoffice-signing-06-en.jpg" %}

To view the digital signature of the document, you can either double-click the **Digital Signature** icon on the status bar, or click the **Show Signatures** button on the alert.

On the **Digital Signatures** dialog box, you can select a signature and click **View Certificate** to see more information about the signer:

{% include image.html src="/files/2020/03/libreoffice-signing-07-en.jpg" %}

The message **This certificate is validated** indicates that LibreOffice was able to establish the **Certification Path** up to the certificate of a known certification authority:

{% include image.html src="/files/2020/03/libreoffice-signing-08-en.jpg" %}

That is similar to a web browser displaying a lock icon when you access an HTTPS website. I explained the certificate hierarchy in [another post][how-to-install-certificates].

## Modifying a signed ODF document

Note that although you can modify a signed ODF document, when you save it, LibreOffice warns you that the existing signatures are not valid anymore and will be removed:

{% include image.html src="/files/2020/03/libreoffice-signing-09-en.jpg" %}

If you want to keep the document signed, after saving you will need to sign it again.

Thus, anyone who had access to the previous version of the document can check its digital signature (by opening the **Digital Signatures** dialog box) and notice that it was signed again at a different date and time, possibly by another person.

## Exporting a document as a signed PDF

The [Portable Document Format (PDF)][pdf] has been developed by [Adobe] to present documents, including text formatting and images, in a manner independent of application software, hardware and operating systems. It was initially a proprietary format, which was later released as an open standard. PDF is a common format for sharing final versions of files, because it prevents loss of formatting.

To export an ODF document as a signed PDF (please note that ODF document does not need to be previously signed), go to the **File** menu, **Export As** submenu and click **Export as PDF**:

{% include image.html src="/files/2020/03/libreoffice-signing-10-en.jpg" %}

Switch to the **Digital Signatures** tab and, under **Certificate**, click **Select**:

{% include image.html src="/files/2020/03/libreoffice-signing-11-en.jpg" %}

On the **Select Certificate** dialog box, choose the certificate to be used to sign and click **Sign**.

Finally, click **Export** and save the PDF document.

## Checking the digital signature of a PDF document

LibreOffice Draw can open PDF documents.

When you open a signed PDF document, LibreOffice Draw notifies you that the document is signed, it also shows the **Digital Signature** icon on the status bar (just as it does with signed ODF documents):

{% include image.html src="/files/2020/03/libreoffice-signing-12-en.jpg" %}

To view the signature, you can either double-click the **Digital Signature** icon on the status bar, or click the **Show Signatures** button on the alert.

## Signing an existing PDF document

LibreOffice is able to sign PDF documents created not only by the office suite itself, but also any existing PDF documents, even those created by other applications (outside LibreOffice).

You can sign an existing PDF document from any application of the LibreOffice suite: just go to the **File** menu, **Digital Signatures** submenu, click **Sign Existing PDF** and open the PDF document that you want to sign. LibreOffice Draw opens the document in read-only mode:

{% include image.html src="/files/2020/03/libreoffice-signing-13-en.jpg" %}

Click **Sign Document**. LibreOffice Draw presents the **Digital Signatures** dialog box.

Now you can sign the PDF document the same way you would sign an ODF document.

## Setting up LibreOffice to use Chromium certificates

Chromium users don't need to install and set up Firefox to sign documents with LibreOffice: they can set up LibreOffice to use the Chromium public key infrastructure.

To do that, open the **Tools** menu and click **Options**.

On the tree by the left, expand **LibreOffice**, then select **Security**:

{% include image.html src="/files/2020/03/libreoffice-cert-chrome-01-en.jpg" %}

By the right, under **Certificate Path**, click the **Certificate** button.

On the **Certificate Path** dialog box, click **Add**:

{% include image.html src="/files/2020/03/libreoffice-cert-chrome-02-en.jpg" %}

Chromium stores its certificate configuration in `~/.pki/nssdb/`.

On the **Select Path** dialog box, press **Ctrl + L** to manually enter the location, type `~/.pki/nssdb/` and click **OK**:

{% include image.html src="/files/2020/03/libreoffice-cert-chrome-03-en.jpg" %}

Back to the **Certificate Path** dialog box, click **OK** to close it:

{% include image.html src="/files/2020/03/libreoffice-cert-chrome-04-en.jpg" %}

Back to the **Options** dialog box, click **OK** to close it.

Restart LibreOffice and you are ready to go!

## References

- [Applying Digital Signatures - LibreOffice Help][libreoffice-help-1]
- [Digital Signatures - LibreOffice Help][libreoffice-help-2]
- [About Digital Signatures - LibreOffice Help][libreoffice-help-3]
- [Signing existing PDF files in LibreOffice][vmiklos]
- [firefox - How do I make a digital certificate available to LibreOffice Writer for digital signatures? - Ask Ubuntu][askubuntu]

[how-to-token]:                 {% post_url en/2019-06-28-using-smart-cards-on-opensuse-linux %}
[libreoffice]:                  https://www.libreoffice.org/
[odf]:                          https://en.wikipedia.org/wiki/OpenDocument
[pdf]:                          https://en.wikipedia.org/wiki/PDF
[firefox]:                      https://www.mozilla.org/firefox/
[how-to-install-certificates]:  {% post_url en/2018-10-30-how-to-install-website-certificates-on-linux %}
[kamarada-15.1]:                {% post_url en/2020-02-27-kamarada-15.1-comes-with-everything-you-need-to-use-Linux-everyday %}
[chromium]:                     https://www.chromium.org/
[chrome]:                       https://www.google.com/chrome/
[opera]:                        https://www.opera.com/
[vivaldi]:                      https://vivaldi.com/
[brave]:                        https://brave.com/
[chrome-token]:                 {% post_url en/2019-09-26-setting-up-smart-card-authentication-on-google-chrome-chromium %}
[writer]:                       https://www.libreoffice.org/discover/writer/
[calc]:                         https://www.libreoffice.org/discover/calc/
[impress]:                      https://www.libreoffice.org/discover/impress/
[draw]:                         https://www.libreoffice.org/discover/draw/
[base]:                         https://www.libreoffice.org/discover/base/
[math]:                         https://www.libreoffice.org/discover/math/
[adobe]:                        https://www.adobe.com/
[libreoffice-help-1]:           https://help.libreoffice.org/Common/Applying_Digital_Signatures
[libreoffice-help-2]:           https://help.libreoffice.org/Common/Digital_Signatures
[libreoffice-help-3]:           https://help.libreoffice.org/Common/About_Digital_Signatures
[vmiklos]:                      https://vmiklos.hu/blog/pdf-sign.html
[askubuntu]:                    https://askubuntu.com/a/1212197/560233
