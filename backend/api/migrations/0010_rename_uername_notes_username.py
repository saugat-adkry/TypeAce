# Generated by Django 4.2 on 2023-04-14 06:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_rename_fullname_notes_uername_alter_notes_id_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='notes',
            old_name='uername',
            new_name='username',
        ),
    ]
