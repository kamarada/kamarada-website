---
date: 2018-11-06 23:59:00 GMT-2
image: '/files/2018/11/dropbox-veracrypt.png'
layout: post
published: true
nickname: 'how-to-dropbox-veracrypt'
title: 'Encrypting the Dropbox folder with VeraCrypt'
excerpt: 'Dropbox is one of the most popular cloud services. Recently some of its users received a warning that it will stop syncing due to the use of an unsupported file system. See how to keep Dropbox syncing and in addition protect your local Dropbox folder against unauthorized access storing it on an encrypted VeraCrypt volume.'
---

{% include image.html src="/files/2018/11/dropbox-veracrypt.png" style="max-width: 200px;" %}

[Dropbox] is one of the most popular cloud services and one of a few that offer a sync client for [Linux]. Recently, some of its users received a warning:

{% include image.html src="/files/2018/11/dropbox-veracrypt-01-en.jpg" caption="Dropbox will stop syncing in 7 days. Move your Dropbox folder to a supported file system." %}

My laptop dual-boots Linux and [Windows] and I have installed the Dropbox sync client on both systems. My Dropbox folder was on a shared [NTFS] partition.

But Dropbox has announced [on its forum][dropboxforum] that starting on Nov 7, 2018 supported [file systems][fs] will be restricted to the most common ones for each operating system: NTFS for Windows, [HFS+] or [APFS] for [Mac OS X][macosx], and clean (not encrypted) [Ext4] for Linux. The move is intended to provide a stable and consistent experience. That's not entirely bad news because chances are that your system already has an Ext4 partition.

Use the [**GParted**][gparted] application to look at your partitions and file systems:

{% include image.html src="/files/2018/11/dropbox-veracrypt-02-en.jpg" %}

Or, in case you prefer the command line interface, use the [**fdisk**][fdisk] command:

```
# mount -l
```

None of my partitions are Ext4. So, at least in principle, I won't be able to sync Dropbox on Linux, only on Windows, providing my Dropbox folder remains on the NTFS partition.

But I use Linux much more often than Windows, so I looked for an option to keep on syncing on Linux. I found a solution with the bonus of increased security: to store the Dropbox folder on an [encrypted VeraCrypt volume][how-to-veracrypt], which would secure the files in case I lose my laptop or it is stolen, for example.

[VeraCrypt] is a file encryption software about which I have already written:

- [Encrypting files with VeraCrypt][how-to-veracrypt] (by now in Portuguese and translated by [Google Translate][google-translate], the proper English version is on the way)

I strongly recommend that you read that post before going on.

An encrypted VeraCrypt volume may be an alternative for those who currently store the Dropbox folder on an encrypted Ext4 partition, because VeraCrypt encrypts files "behind the scenes", in a way Dropbox is not aware that they are being encrypted.

**Note:** VeraCrypt only ensures confidentiality for the files on disk. For instance, if a malicious person knows your e-mail and password, he or she is able to access the same files by the [Dropbox website][dropbox] using a browser. VeraCrypt also does not dismiss the use of other security tools, such as antivirus and backup.

A disadvantage of that solution is that it requires the manual work of mounting the encrypted volume and starting the Dropbox client whenever it is necessary to sync. So I recommend that you read the entire post before acting, to decide whether my solution really helps you.

## Before starting

To avoid problems, make sure your files are synced. That is true if you click the **Dropbox icon** and read **Up to date** on the menu that appears:

{% include image.html src="/files/2018/11/dropbox-veracrypt-03-en.jpg" %}

Also in that menu check the available space for your Dropbox account. I have 5.8GB of space. Usually new accounts start with 2GB.

## Creating the encrypted volume

Launch VeraCrypt and follow the [VeraCrypt how-to][how-to-veracrypt] to create an encrypted file container / standard volume. Here I'm going to highlight only some specifics of our Dropbox volume.

The **Volume Location** can be any, because that information is not visible to the Dropbox client. The volume itself is a file like any other, so it can be stored on that NTFS partition, for example, as long as it has available space, there is no problem.

The **Volume Size** must be equal to the available space for your Dropbox account (or bigger, to be safe):

{% include image.html src="/files/2018/11/dropbox-veracrypt-04.jpg" %}

As we specified a size bigger than 4GB, the Volume Creation Wizard asks about **Large Files**:

{% include image.html src="/files/2018/11/dropbox-veracrypt-05.jpg" %}

If you plan to store large files (larger than 4GB) in the volume, select the second option (**I will store files larger than 4 GB on the volume**). Otherwise, select the first. In doubt, select the second. Click **Next**.

On the **Format Options** screen, the volume must be formatted with the **Linux Ext4** filesystem:

{% include image.html src="/files/2018/11/dropbox-veracrypt-06.jpg" %}

Click **Next**. The next screen asks about **Cross-Platform Support**:

{% include image.html src="/files/2018/11/dropbox-veracrypt-07.jpg" %}

As the volume is going to be used only on Linux, select the second option (**I will mount the volume only on Linux**) and click **Next**.

After creating the volume, mount it. Choose a slot and always mount the volume on the chosen slot, because you are going to inform the volume mount point to the Dropbox client. For instance, I chose the slot 10, so my volume mount point is `/mnt/veracrypt10`:

{% include image.html src="/files/2018/11/dropbox-veracrypt-08-en.jpg" %}

## Moving the Dropbox folder

Create a folder called `Dropbox` inside the encrypted volume.

Click the **Dropbox icon** in the **system tray**, then click **Preferences**.

On the **Dropbox Preferences** dialog box, select the **Sync** tab and click **Move**:

{% include image.html src="/files/2018/11/dropbox-veracrypt-09-en.jpg" %}

Navigate into the encrypted volume mount point, select the `Dropbox` folder and click **Choose**:

{% include image.html src="/files/2018/11/dropbox-veracrypt-10.jpg" %}

Let Dropbox move your folder and its contents to the new location:

{% include image.html src="/files/2018/11/dropbox-veracrypt-11-en.jpg" %}

A progress bar is shown during the moving.

When it finishes, there is one more change to do. Select the **General** tab and uncheck **Start Dropbox on system startup**:

{% include image.html src="/files/2018/11/dropbox-veracrypt-13-en.jpg" %}

Click **OK** to close the **Dropbox Preferences** dialog box.

## Daily usage

If you have read the entire [VeraCrypt how-to][how-to-veracrypt] (I suppose you have), you know the volume should stay mounted only during use.

When you don't need to use your Dropbox files anymore, quit the Dropbox client (click the **Dropbox icon** and then click **Quit Dropbox**) and unmount the volume (VeraCrypt calls that operation *dismount*). Always quit the Dropbox client before unmounting the volume.

When you need to use your Dropbox files again, launch VeraCrypt, mount the volume and start the Dropbox client. In case you forget to mount the volume before starting the Dropbox client, it won't find the `Dropbox` folder and complain about it:

{% include image.html src="/files/2018/11/dropbox-veracrypt-14-en.jpg" %}

## References

- [Dropbox To End Sync Support For All Filesystems Except Ext4 on Linux - It's FOSS][itsfoss]
- [How To Add a Second Layer of Encryption to Dropbox - Lifehacker][lifehacker]
- [Moving your Dropbox folder to a new location - Dropbox Help][move-dropbox-folder]
- [What are the system requirements to run Dropbox? - Dropbox Help][system-requirements]

[dropbox]:              https://www.dropbox.com
[linux]:                https://www.kernel.org/linux.html
[windows]:              https://www.microsoft.com/windows/
[ntfs]:                 https://en.wikipedia.org/wiki/NTFS
[dropboxforum]:         https://www.dropboxforum.com/t5/Syncing-and-uploads/Linux-Dropbox-client-warn-me-that-it-ll-stop-syncing-in-Nov-why/m-p/290065/highlight/true#M42255
[fs]:                   https://en.wikipedia.org/wiki/File_system
[hfs+]:                 https://en.wikipedia.org/wiki/HFS_Plus
[apfs]:                 https://en.wikipedia.org/wiki/Apple_File_System
[macosx]:               http://www.apple.com/macosx/
[ext4]:                 https://en.wikipedia.org/wiki/Ext4
[gparted]:              https://gparted.org/
[fdisk]:                https://www.gnu.org/software/fdisk/
[how-to-veracrypt]:     http://translate.google.com/translate?js=n&sl=pt&tl=en&u=https://kamarada.github.io/pt/2018/10/15/criptografia-de-arquivos-com-o-veracrypt/
[veracrypt]:            https://www.veracrypt.fr/
[google-translate]:     https://translate.google.com.br/
[itsfoss]:              https://itsfoss.com/dropbox-linux-ext4-only/
[lifehacker]:           https://lifehacker.com/5794486/how-to-add-a-second-layer-of-encryption-to-dropbox
[move-dropbox-folder]:  https://www.dropbox.com/help/desktop-web/move-dropbox-folder
[system-requirements]:  https://www.dropbox.com/help/desktop-web/system-requirements#desktop
