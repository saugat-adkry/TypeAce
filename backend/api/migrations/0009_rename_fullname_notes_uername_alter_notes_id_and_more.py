# Generated by Django 4.2 on 2023-04-14 06:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_notes_table'),
    ]

    operations = [
        migrations.RenameField(
            model_name='notes',
            old_name='fullname',
            new_name='uername',
        ),
        migrations.AlterField(
            model_name='notes',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterModelTable(
            name='notes',
            table=None,
        ),
    ]
